import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import api from '~/services/api';
import {
  Container,
  ListHeader,
  MembersList,
  Scroll,
  Name,
  Clan,
  Position,
} from './styles';

export default function Dashboard() {
  // const dispatch = useDispatch();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function getStatus(id) {
      const status = await api.get(`/memberallstatus/${id}`);

      const positionalStatus = status.data.positionalStatus.total || 0;
      const personalStatus = status.data.personalStatus.total || 0;
      const statusString =
        positionalStatus > 0
          ? `${personalStatus +
              positionalStatus} (${personalStatus}+${positionalStatus})`
          : personalStatus;

      return statusString;
    }

    async function loadMembers() {
      setLoading(true);

      const response = await api.get('/members');
      const getData = async () => {
        return Promise.all(
          response.data
            .filter(member => {
              return member.situation.situation_en === 'Active';
            })
            .map(async member => {
              const statusString = await getStatus(member.id);

              return {
                id: member.id,
                kindred_name: member.kindred_name,
                clan: member.clan.clan_en,
                clan_logo: member.clan.clan_logo_file.url,
                position: member.position.position_en || 'none',
                domain: member.domain.name,
                status: statusString,
              };
            })
        );
      };

      getData().then(data => {
        console.tron.log(data);
        setMembers(data);
        setLoading(false);
      });
    }

    loadMembers();
  }, []);

  // generic clan image:
  // fb0cdae575f85b355e1c72c60714e0b0.png

  return (
    <Container loading={loading ? 1 : 0}>
      <Scroll>
        <ListHeader>
          <Name>Member</Name>
          <Clan>
            <strong>Clan</strong>
          </Clan>
          <Position>Position</Position>
          <strong>Status</strong>
        </ListHeader>
      </Scroll>
      <Scroll>
        {loading ? (
          <FaSpinner size={40} color="#fff" />
        ) : (
          <ul>
            {members.map(member => (
              <MembersList key={member.id}>
                <Name>{member.kindred_name}</Name>
                <Clan>
                  <img
                    src={
                      member.clan_logo ||
                      'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt={member.clan}
                  />
                  <strong>{member.clan}</strong>
                </Clan>

                <Position>{member.position}</Position>
                <strong>{member.status}</strong>
              </MembersList>
            ))}
          </ul>
        )}
      </Scroll>
    </Container>
  );
}
