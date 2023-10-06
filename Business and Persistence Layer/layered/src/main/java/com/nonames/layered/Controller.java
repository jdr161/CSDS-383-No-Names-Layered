package com.nonames.layered;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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

    @PostMapping("/create-participant")
    public ResponseEntity<Participant> addParticipant(@RequestBody Participant participant) {
        Participant createdParticipant = participantRepository.save(participant);
        return ResponseEntity.ok(createdParticipant);
    }

    @PutMapping("/register-participant")
    public ResponseEntity registerParticipant(@RequestParam UUID participantId, @RequestParam UUID eventId) {
        Optional<Participant> participant = participantRepository.findById(participantId);
        Optional<Event> event = eventRepository.findById(eventId);

        // todo optional validation & refactor

        event.get().getParticipants().add(participant.get());
        eventRepository.save(event.get());

        return ResponseEntity.ok().build();
    }
}
