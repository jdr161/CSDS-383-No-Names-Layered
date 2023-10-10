import React, { Component } from "react"
import { Table, Thead, Tbody, TableContainer, Tr, Th, Td, Heading } from "@chakra-ui/react"
// import { participants } from "../../example-data/participants"
import participantService from "../../services/participantService"

class ParticipantsTable extends Component {
    constructor() {
        super()
        this.state = {
            participants: []
        }
    }

    async componentDidMount() {
        try {
            const participantsResponse = await participantService.getAllParticipants()
            this.setState({
                participants: participantsResponse
            })
        } catch (error) {
            console.error("Failed to get all events")
        }
    }

    render() {
        return (
            <TableContainer maxHeight={'50vh'} overflowY={'auto'}>
                <Heading>Participants</Heading>
                <Table variant={'simple'}>
                    <Thead position={'sticky'} top={'0'} bgColor={'gray.100'}>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.participants.map((participant => {
                            return (
                                <Tr>
                                    <Td>{participant.id}</Td>
                                    <Td>{participant.name}</Td>
                                    <Td>{participant.email}</Td>
                                </Tr>
                            )
                        }))}
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }
}

export default ParticipantsTable
