import React, { Component } from "react"
import { Table, Thead, Tbody, TableContainer, Tr, Th, Td } from "@chakra-ui/react"
import { participants } from "../../example-data/participants"

class ParticipantsTable extends Component {
    constructor() {
        super()
        this.state = {
            participants: participants
        }
    }

    render() {
        return (
            <TableContainer>
                <Table variant={'simple'}>
                    <Thead>
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
