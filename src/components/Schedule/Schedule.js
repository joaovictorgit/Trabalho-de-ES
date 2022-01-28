import React, { useEffect, useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import Modal from '../Modal/Modal'
import AddSchedule from '../Forms/AddSchedule/AddSchedule'
import { editSchedule, getSchedule } from '../../controllers/ScheduleController';
import './react-big-calendar.css';
import moment from "moment";
import 'moment/locale/pt-br'
import ScheduleInfo from '../Infos/ScheduleInfo';


const Schedule = () => {
    const [events, setEvents] = useState([]);
    const [modalView, setModalView] = useState(false);
    const [infoView, setInfoView] = useState(false);
    const [newEvent, setNewEvent] = useState({});
    const [object, setObject] = useState({});
    const [updateScedule, setUpdateSchedule] = useState(false)
    const DnDCalendar = withDragAndDrop(Calendar);
  
    useEffect(() => {
      getSchedule(setEvents);
    }, [updateScedule, infoView, modalView])
  
    const handleSelect = ({ start, end }) => {
      setNewEvent({start, end});
      setModalView(true);
    }

    const handleDrop = ({event, start, end}) => {
      console.log(start);
      const id = event.id;
      editSchedule({id, start, end});
      setUpdateSchedule(!updateScedule);
    }

    const openInfo = (event) => {
      setObject(event);
      setInfoView(true);
    }
    
      /*const localizer = dateFnsLocalizer({
          format,
          parse,
          startOfWeek,
          getDay,
          locales
        })*/
        const localizer = momentLocalizer(moment);
  
      return (
          <div className='Schedule'>
            <DnDCalendar
                popup
                resizable={true}
                selectable={true}
                localizer={localizer}
                messages={{next: 'Próximo', previous: 'Anterior', today: 'Hoje', day: 'Dia', week: 'Semana', month: 'Mês'}}
                events={events}
                views={['month','week','day']}
                defaultView={'week'}
                scrollToTime={new Date(2022, 1, 1, 7)}
                defaultDate={new Date()}
                onSelectEvent={openInfo}
                onSelectSlot={handleSelect}
                onEventDrop={handleDrop}
                onEventResize={handleDrop}
                longPressThreshold={20}
                
            />
            {modalView ? <Modal onClose={() => setModalView(false)}><AddSchedule start={newEvent.start} end={newEvent.end} onClose={() => setModalView(false)}/></Modal> : null}
            {infoView ? <Modal onClose={() => setInfoView(false)}><ScheduleInfo object={object} onClose={() => setInfoView(false)}/></Modal> : null}
          </div>
      )
    }
  
  
  export default Schedule;