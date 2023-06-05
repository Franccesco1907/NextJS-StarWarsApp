import { People } from '@/app/interfaces/people.interface';
import styles from './VehicleInformation.module.css';
import Typography from '@/design-system/components/Typography/Typography';

function VehicleInformation(props: { detailPeople: People}) {
  return (
    <div className={styles.container}>
      {props.detailPeople != null ? (
        <div>
          {props.detailPeople.vehicles.length !== 0 ?
            <>
              <div className={styles.title}>
                <Typography variant='subheading'>Vehicles</Typography>
              </div>
              {props.detailPeople.vehicles.map((vehicle: string, index: number) => (
                <div key={index} className={styles.item_info_card}>
                  <Typography variant='caption'>{vehicle}</Typography>
                </div>
              ))}
            </>
            : null}
        </div>
      ) : (<h5 className="text-alert">No character selected</h5>)}
    </div>
  )
}

export default VehicleInformation;