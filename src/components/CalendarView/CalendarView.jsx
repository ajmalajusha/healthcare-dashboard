import styles from './CalendarView.module.css';
import { ChevronLeft, ChevronRight, Briefcase, UserCheck ,Plus} from 'lucide-react';
import tooth from "../../../public/tooth.svg"
import avatar from "../../../public/user-avatar.png"

// // Map icon names from data to actual components
// const iconMap = {
//     UserCheck: UserCheck,
//     Tooth: UserCheck,
//     Briefcase: Briefcase, // Default
// };

const CalendarView = ({ calendarDays, appointmentsOnCalendar, detailedAppointments }) => {
//   const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

//   // Create a grid of days for display (simplified)
//   // A real calendar would involve more logic for month generation
//   const displayDays = [];
//   const firstDayOfMonth = 25; // As per image start
//   for (let i = 0; i < 35; i++) { // Display 5 weeks
//     let dayNumber = firstDayOfMonth + i;
//     let displayValue = null;
//     let appointments = null;

//     if (dayNumber <= 31) { // October
//         displayValue = dayNumber;
//         appointments = appointmentsOnCalendar[dayNumber.toString()] || [];
//     } else if (dayNumber > 31 && dayNumber <= 31 + 7) { // Placeholder for next month if needed
//         // displayValue = dayNumber - 31; // Show next month's dates lightly
//     }
//     // For simplicity, this example only shows October days present in appointmentsOnCalendar data
//     // and fills the rest up to 31.
//     // The 'calendarDays' prop could be used for a more robust pre-calculated grid.

//     if (appointmentsOnCalendar[i + 25]) { // Assuming days are 25-31 from image
//         displayDays.push({
//             day: i + 25,
//             appointments: appointmentsOnCalendar[(i + 25).toString()] || [],
//             isCurrentMonth: true,
//         });
//     } else if (i + 25 <= 31) {
//          displayDays.push({
//             day: i + 25,
//             appointments: [],
//             isCurrentMonth: true,
//         });
//     }
//   }
//   // Trim to match the exact view in the image (25 to 31)
//   const visibleDays = displayDays.slice(0, 7);


  return (
//     <div className={styles.calendarContainer}>
//         <div style={{display:"flex",justifyContent:"end",marginBottom:"20px"}}>
//    <div className={styles.userProfile}>
//           <img src={avatar} alt="usericon" className={styles.userAvatar} />
       
//         </div>
//         <button className={`${styles.iconButton} ${styles.addButton}`} aria-label="Add">
//           <Plus size={24} />
//         </button>
//         </div>
//       <div className={styles.calendarHeader}>
//         <h3 className={styles.calendarTitle}>October 2021</h3>
//         <div className={styles.calendarNav}>
//           <button className={styles.navButton}><ChevronLeft size={20} /></button>
         
//           <button className={styles.navButton}><ChevronRight size={20} /></button>
//         </div>
//       </div>

//       <div className={styles.daysOfWeek}>
//         {daysOfWeek.map(day => <div key={day} className={styles.dayName}>{day}</div>)}
//       </div>

//       <div className={styles.calendarGrid}>
//         {visibleDays.map((dayObj, index) => (
//           <div key={index} className={`${styles.calendarDay} ${!dayObj.isCurrentMonth ? styles.otherMonth : ''}`}>
//             <span className={styles.dayNumber}>{dayObj.day}</span>
//             <div className={styles.appointmentsDots}>
//               {dayObj.appointments.map((app, idx) => (
//                 <div
//                   key={idx}
//                   className={`${styles.appointmentTime} ${app.type === 'details' ? styles.detailsApp : ''}`}
//                 >
//                   {app.time}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.detailedAppointmentsSection}>
//         {detailedAppointments.map((app, index) => {
//           const IconComponent = iconMap[app.icon] || Briefcase;
//           return (
//             <div key={index} className={styles.detailedAppointmentCard} style={{ backgroundColor: app.bgColor }}>
//               <div className={styles.appIconContainer}>
//                 <IconComponent size={24} className={styles.appIcon}/>
//               </div>
//               <div className={styles.appInfo}>
//                 <p className={styles.appType}>{app.type}</p>
//                 <p className={styles.appTime}>{app.time}</p>
//                 <p className={styles.appDoctor}>{app.doctor}</p>
//               </div>
//               <ChevronRight size={20} className={styles.appArrow} />
//             </div>
//           );
//         })}
//       </div>
//     </div>


<>  
 {/* <div className="bg-[#f0f5fc] min-h-screen flex items-center justify-center p-4"> */}
  <div className={styles.calendarContainer}>
   <div className="flex justify-end space-x-3 mb-6">
    <div className="w-9 h-9 rounded-xl bg-[#10dae5] flex items-center justify-center">
     <img alt="Avatar of a man with dark hair and beard, smiling" className="rounded-xl" height="24" src={avatar} width="24"/>
    </div>
    <button aria-label="Add new" className="w-9 h-9 rounded-xl bg-[#2e3192] text-white text-2xl font-bold flex items-center justify-center leading-none">
     +
    </button>
   </div>
   <div className="mb-6">
     <div className="flex justify-between items-center space-x-2 mt-6 text-[#2e3192]  font-semibold select-none">
    <h4 className=" font-semibold text-[#2e3192] mb-3">
     October 2021
    </h4> 
    <div>

    <i className="fas fa-arrow-left me-2">
    </i> 
    <i className="fas fa-arrow-right">
    </i>
    </div>
   </div>
    <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#2e3192]">
     <div>
      Mon
     </div>
     <div>
      Tues
     </div>
     <div>
      Wed
     </div>
     <div>
      Thurs
     </div>
     <div>
      Fri
     </div>
     <div>
      Sat
     </div>
     <div className="text-[#bfc6d9]">
      Sun
     </div>
    </div>
    <div className="grid grid-cols-7 text-center text-xs font-semibold text-[#2e3192] mt-1">
     <div>
      25
     </div>
     <div>
      26
     </div>
     <div>
      27
     </div>
     <div>
      28
     </div>
     <div>
      29
     </div>
     <div>
      30
     </div>
     <div className="text-[#bfc6d9]">
      31
     </div>
    </div>
    <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#2e3192] mt-1">
     <div>
      10:00
     </div>
     <div>
      08:00
     </div>
     <div>
      12:00
     </div>
     <div>
      10:00
     </div>
     <div>
      14:00
     </div>
     <div>
      14:00
     </div>
     <div className="text-[#bfc6d9]">
      10:00
     </div>
    </div>
    <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#2e3192] mt-1">
     <div>
      11.00
     </div>
     <div>
      <span className="inline-block bg-[#2e3192] text-white rounded-md px-2 py-[1px]">
       09:00
      </span>
     </div>
     <div>
      13:00
     </div>
     <div>
      <span className="inline-block bg-[#bfc6d9] rounded-md px-2 py-[1px]">
       11:00
      </span>
     </div>
     <div>
      —
     </div>
     <div>
      <span className="inline-block bg-[#bfc6d9] rounded-md px-2 py-[1px]">
       12:00
      </span>
     </div>
     <div className="text-[#bfc6d9]">
      <span className="inline-block bg-[#bfc6d9] rounded-md px-2 py-[1px]">
       09:00
      </span>
     </div>
    </div>
    <div className="grid grid-cols-7 text-center text-[10px] font-semibold text-[#2e3192] mt-1">
     <div>
      12:00
     </div>
     <div>
      10:00
     </div>
     <div>
      —
     </div>
     <div>
      —
     </div>
     <div>
      16:00
     </div>
     <div>
      15:00
     </div>
     <div>
      11:00
     </div>
    </div>
   </div>
   <div className="flex space-x-4 mb-6">
    <div className="flex-2 bg-[#2e3192] rounded-2xl p-4 text-white pt-6">
     <div className="flex justify-between items-center mb-1">
      <p className="font-semibold text-sm">
       Dentist
      </p>
      <span aria-label="Tooth emoji" className="text-lg" role="img">
       🦷
      </span>
     </div>
     <p className="text-[10px] font-semibold mb-0.5">
      09:00-11:00
     </p>
     <p className="text-[10px] font-normal">
      Dr. Cameron Williamson
     </p>
    </div>
    <div className="flex-1 bg-[#bfc6d9] rounded-2xl p-4 text-[#2e3192]">
     <div className="flex justify-between items-center mb-1">
      <p className="font-semibold text-sm">
       Physiotherapy Appointment
      </p>
      <span aria-label="Flexed biceps emoji" className="text-lg" role="img">
       💪
      </span>
     </div>
     <p className="text-[10px] font-semibold mb-0.5">
      11:00-12:00
     </p>
     <p className="text-[10px] font-normal">
      Dr. Kevin Djones
     </p>
    </div>
   </div>
   <div>
    <p className="font-semibold text-sm text-[#2e3192] mb-2">
     The Upcoming Schedule
    </p>
    <p className="text-xs text-[#2e3192] mb-2">
     On Thursday
    </p>
    <div className="flex space-x-4 mb-4">
     <div className="flex-1 bg-[#bfc6d9] rounded-2xl p-4 text-[#2e3192]">
      <div className="flex justify-between items-center mb-1">
       <p className="font-semibold text-xs">
        Health checkup complete
       </p>
       <span aria-label="Pencil emoji" className="text-sm" role="img">
        ✏️
       </span>
      </div>
      <p className="text-[10px] font-semibold">
       11:00 AM
      </p>
     </div>
     <div className="flex-2 bg-[#bfc6d9] rounded-2xl p-4 text-[#2e3192]">
      <div className="flex justify-between items-center mb-1">
       <p className="font-semibold text-xs">
        Ophthalmologist
       </p>
       <span aria-label="Eye emoji" className="text-sm" role="img">
        👁️
       </span>
      </div>
      <p className="text-[10px] font-semibold">
       14:00 PM
      </p>
     </div>
    </div>
    <p className="text-xs text-[#2e3192] mb-6 mt-3">
     On Saturday
    </p>
    <div className="flex space-x-4">
     <div className="flex-1 bg-[#bfc6d9] rounded-2xl p-4 text-[#2e3192]">
      <div className="flex justify-between items-center mb-1">
       <p className="font-semibold text-xs">
        Cardiologist
       </p>
       <span aria-label="Heart emoji" className="text-sm" role="img">
        ❤️
       </span>
      </div>
      <p className="text-[10px] font-semibold">
       12:00 AM
      </p>
     </div>
     <div className="flex-1 bg-[#bfc6d9] rounded-2xl p-4 text-[#2e3192]">
      <div className="flex justify-between items-center mb-1">
       <p className="font-semibold text-xs">
        Neurologist
       </p>
       <span aria-label="Man health worker emoji" className="text-sm" role="img">
        👨‍⚕️
       </span>
      </div>
      <p className="text-[10px] font-semibold">
       16:00 PM
      </p>
     </div>
    </div>
   </div>
  
  </div>  
  {/* </div>   */}
  </>

  );
};

export default CalendarView;