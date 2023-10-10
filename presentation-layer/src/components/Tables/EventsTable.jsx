import { Table, Thead, Tbody, TableContainer, Tr, Th, Td, UnorderedList, ListItem, Heading } from "@chakra-ui/react"
import React, { Component } from "react"
// import { events } from "../../example-data/events"
import eventService from "../../services/eventService"

class EventsTable extends Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }

    async componentDidMount() {
        try {
            const eventsResponse = await eventService.getAllEvents()
            this.setState({
                events: eventsResponse
            })
        } catch (error) {
            console.error("Failed to get all events")
        }
    }

    render() {
        return (
            <TableContainer maxHeight={'50vh'} overflowY={'auto'}>
                <Heading>Events</Heading>
                <Table variant={'simple'}>
                    <Thead position={'sticky'} top={'0'} bgColor={'gray.100'}>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Date</Th>
                            <Th>Time</Th>
                            <Th>Title</Th>
                            <Th>Description</Th>
                            <Th>Host Email</Th>
                            <Th>Participants</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.events.map((event => {
                            return (
                                <Tr>
                                    <Td>{event.id}</Td>
                                    <Td>{event.date}</Td>
                                    <Td>{event.time}</Td>
                                    <Td>{event.title}</Td>
                                    <Td>{event.description}</Td>
                                    <Td>{event.hostEmail}</Td>
                                    <Td>{event.participants.map(participant => {
                                        return (
                                            <UnorderedList>
                                                <ListItem key={'participant-name'}>Name: {participant.name}
                                                    <UnorderedList>
                                                        <ListItem key={'participant-id'}>ID: {participant.id}</ListItem>
                                                        <ListItem key={'participant-email'}>Email: {participant.email}</ListItem>
                                                    </UnorderedList>
                                                </ListItem>
                                            </UnorderedList>
                                        )
                                    })}</Td>
                                </Tr>
                            )
                        }))}
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }
} 

export default EventsTable
