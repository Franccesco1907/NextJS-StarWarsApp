import { People } from '@/app/interfaces/people.interface';
import styles from './GeneralInformation.module.css';
import Typography from '@/design-system/components/Typography/Typography';

function GeneralInformation(props: { detailPeople: People}) {
  return (
    <div className={styles.container}>
      {props.detailPeople != null ? (
        <div>
          <div className={styles.title}>
            <Typography variant='subheading'>General Information</Typography>
          </div>
          <div className={styles.item_info_card}>
            <Typography variant='caption'>Eye Color</Typography>
            <Typography variant='subheading'>{props.detailPeople.eye_color}</Typography>
          </div>
          <div className={styles.item_info_card}>
            <Typography variant='caption'>Hair Color</Typography>
            <Typography variant='subheading'>{props.detailPeople.hair_color}</Typography>
          </div>
          <div className={styles.item_info_card}>
            <Typography variant='caption'>Skin Color</Typography>

            <Typography variant='subheading'>{props.detailPeople.skin_color}</Typography>
          </div>
          <div className={styles.item_info_card}>
            <Typography variant='caption'>Birth Year</Typography>
            <Typography variant='subheading'>{props.detailPeople.birth_year}</Typography>
          </div>
        </div>
      ) : (<h5 className="text-alert">No character selected</h5>)}
    </div>
  )
}

export default GeneralInformation;