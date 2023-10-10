package com.nonames.layered;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/api")
public class Controller {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    ParticipantRepository participantRepository;

    @GetMapping("/view-events")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return ResponseEntity.ok(events);
    }

    @PostMapping("/create-event")
    public ResponseEntity<Event> addEvent(@RequestBody Event event) {
        System.out.println(event);
        Event createdEvent = eventRepository.save(event);
        return ResponseEntity.ok(createdEvent);
    }

    @GetMapping("/view-participants")
    public ResponseEntity<List<Participant>> getAllParticipants() {
        List<Participant> participants = participantRepository.findAll();
        return ResponseEntity.ok(participants);
    }

    @PostMapping("/create-participant")
    public ResponseEntity<Participant> addParticipant(@RequestBody Participant participant) {
        Participant createdParticipant = participantRepository.save(participant);
        return ResponseEntity.ok(createdParticipant);
    }

    @PutMapping("/register-participant")
    public ResponseEntity<Event> registerParticipant(@RequestParam UUID participantId, @RequestParam UUID eventId) {
        Optional<Event> event = eventRepository.findById(eventId);
        Optional<Participant> participant = participantRepository.findById(participantId);

        if (event.isEmpty())
            throw new ResponseStatusException(NOT_FOUND, "Event UUID not found");
        if (participant.isEmpty())
            throw new ResponseStatusException(NOT_FOUND, "Participant UUID not found");

        event.get().getParticipants().add(participant.get());
        eventRepository.save(event.get());

        participant.get().getEvents().add(event.get());
        participantRepository.save(participant.get());

        return ResponseEntity.ok(event.get());
    }
}
