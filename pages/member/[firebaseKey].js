/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../api/memberData';

export default function ViewMembers() {
  const [membersDetails, setMemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={membersDetails.image} alt={membersDetails.name} style={{ width: '300px' }} />
      </div>

      <div>
        <h5> {membersDetails.name || ''}  <p>{membersDetails.role || ''}</p></h5>
      </div>
    </div>
  );
}
