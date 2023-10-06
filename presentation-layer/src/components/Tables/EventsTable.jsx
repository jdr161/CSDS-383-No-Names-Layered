import { Table, Thead, Tbody, TableContainer, Tr, Th, Td, UnorderedList, ListItem } from "@chakra-ui/react"
import React, { Component } from "react"
import { events } from "../../example-data/events"

class EventsTable extends Component {
    constructor() {
        super()
        this.state = {
            events: events
        }
    }

    render() {
        console.log(events)
        return (
            <TableContainer>
                <Table variant={'simple'}>
                    <Thead>
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
                        {events.map((event => {
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
} export default EventsTable