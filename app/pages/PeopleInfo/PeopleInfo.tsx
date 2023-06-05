import React, { useEffect, useState } from 'react';

import { getAllVehicles } from '@/app/functions/requests';

function PeopleInfo(props: any) {

  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    getAllVehicles(setVehicles);
  }, [])

  return (
    <div className="col-md-9 col-xs-12 col-sm-6 no_padding content_people_pc" key={props.idPeople}>
      {props.detailPeople != null ? (
        <div className="collapse_item content_general_info">
          <h3>General Information</h3>
          <div className="card-body">
            <div className="item_info_card">
              <h5>Eye Color</h5>
              <p>{props.detailPeople.eye_color}</p>
            </div>
            <div className="item_info_card">
              <h5>Hair Color</h5>
              <p>{props.detailPeople.hair_color}</p>
            </div>
            <div className="item_info_card">
              <h5>Skin Color</h5>
              <p>{props.detailPeople.skin_color}</p>
            </div>
            <div className="item_info_card">
              <h5>Birth Year</h5>
              <p>{props.detailPeople.birth_year}</p>
            </div>
          </div>
          {props.detailPeople.vehicles != '' ? (
            <div className="collapse_item" >
              <h3>Vehicles</h3>
              <div className="card-body">
                {props.detailPeople.vehicles ? props.detailPeople.vehicles.map((vehicle: any, index: number) => (
                  <div className="item_info_card" key={index}>
                    {
                      vehicles != null ? (
                        (vehicles as []).filter(function (e: any) {
                          return e.url === vehicle
                        }).map((ele: any, i: number) => (
                          <h5 key={i}>{ele.name}</h5>
                        ))
                      ) : ('')
                    }
                  </div>
                )): null}
              </div>
            </div>
          ) : (<h5 className="text-alert">The people has no vehicles</h5>)}
        </div>

      ) : (<h5 className="text-alert">No character selected</h5>)}
    </div>
  )
}

export default PeopleInfo;