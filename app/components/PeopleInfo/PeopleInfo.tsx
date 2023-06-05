import styles from './PeopleInfo.module.css';
import GeneralInformation from '../GeneralInformation/GeneralInformation';
import VehicleInformation from '../VehicleInformation/VehicleInformation';
import { People } from '@/app/interfaces/people.interface';

function PeopleInfo(props: { detailPeople: People, peopleId: number }) {
  return (
    <div className={props.peopleId !== 0 ? styles.container_clicked:styles.container}>
      {props.detailPeople != null ? (
        <div className={props.peopleId !== 0 ? styles.people_information_clicked : styles.people_information}>
          <GeneralInformation detailPeople={props.detailPeople} />
          <VehicleInformation detailPeople={props.detailPeople} />
        </div>
      ) : (<h5 className="text-alert">No character selected</h5>)}
    </div>
  )
}

export default PeopleInfo;