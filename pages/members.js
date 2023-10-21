/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMembers } from '../api/memberData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';

function ShowMembers() {
  const [members, setMembers] = useState([]);

  const { user } = useAuth();

  const getAllTheMembers = () => {
    getMembers(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllTheMembers();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      <div className="text-center my-4">

        <Link href="/member/new" passHref>
          <Button>Add A Member</Button>
        </Link>

        {members?.map((member) => (
          <MemberCard key={member.firebaseKey} obj={member} onUpdate={getAllTheMembers} />
        ))}
      </div>
    </div>
  );
}

export default ShowMembers;
