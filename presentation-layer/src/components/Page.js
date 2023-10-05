import React, { Component } from "react"

import CreateEventForm from './Forms/CreateEventForm'
import CreateParticipantForm from './Forms/CreateParticipantForm'
import RegisterParticipantForm from './Forms/RegisterParticipantForm'
import EventsTable from './Tables/EventsTable'
import ParticipantsTable from './Tables/ParticipantsTable'


class Page extends Component {
    constructor() {
        super()
        this.state = {
            showCreateEventForm: false,
            showCreateParticipantForm: false,
            showRegisterParticipantForm: false,
            showEventsTable: false,
            showParticipantsTable: false
        }
    }

    showComponent(name){
        switch(name){
            case "showCreateEventForm":
                this.setState({
                    showCreateEventForm: true,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: false,
                    showEventsTable: false,
                    showParticipantsTable: false
                })
                break
            case "showCreateParticipantForm":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: true,
                    showRegisterParticipantForm: false,
                    showEventsTable: false,
                    showParticipantsTable: false
                })
                break
            case "showRegisterParticipantForm":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: true,
                    showEventsTable: false,
                    showParticipantsTable: false
                })
                break
            case "showEventsTable":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: false,
                    showEventsTable: true,
                    showParticipantsTable: false
                })
                break
            case "showParticipantsTable":
                this.setState({
                    showCreateEventForm: false,
                    showCreateParticipantForm: false,
                    showRegisterParticipantForm: false,
                    showEventsTable: false,
                    showParticipantsTable: true
                })
                break
            default:
                console.log("type somewhere")
                break
        }
    }
    render() {
        const { showCreateEventForm, showCreateParticipantForm, showRegisterParticipantForm, showEventsTable, showParticipantsTable } = this.state
        return(
            <>
            <div>
                <button onClick={() => this.showComponent("showCreateEventForm")}>Create Event</button>
                <button onClick={() => this.showComponent("showCreateParticipantForm")}>Create Participant</button>
                <button onClick={() => this.showComponent("showRegisterParticipantForm")}>Register Participant</button>
                <button onClick={() => this.showComponent("showEventsTable")}>Show All Event</button>
                <button onClick={() => this.showComponent("showParticipantsTable")}>Show All Participants</button>
            </div>
            <div>
                {showCreateEventForm && <CreateEventForm/>}
                {showCreateParticipantForm && <CreateParticipantForm/>}
                {showRegisterParticipantForm && <RegisterParticipantForm/>}
                {showEventsTable && <EventsTable/>}
                {showParticipantsTable && <ParticipantsTable/>}
            </div>
            </>
        )
    }
} export default Page