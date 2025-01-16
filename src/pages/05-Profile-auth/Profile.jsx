import React, { useContext } from "react";
import Container from "../../components/Container";
import { BiCalendarEdit, BiCalendarPlus, BiEnvelope, BiLock, BiUser, BiUserCheck, BiUserPin, BiUserX } from "react-icons/bi";

import Comp_Card from "./Comp_Card";
import { ProfileContext } from "../../contexts/Contexts";
import "../../assets/styles/page_styles/05-Profile/profile.css";

const Profile = () => {
  const profileContext = useContext(ProfileContext);
  return (
    <Container id="profile" className="grid">
      <Comp_Card
        redirect="change-name"
        Icon={BiUser}
        title="Display Name"
        desc={profileContext?.display_name || "Undefined"}
      />
      <Comp_Card
        redirect="change-username"
        Icon={BiUserPin}
        title="Username"
        desc={profileContext?.username || "Undefined"}
      />
      <Comp_Card redirect="change-email" Icon={BiEnvelope} title="Email" desc={profileContext?.email || "Undefined"} />
      <Comp_Card
        redirect="change-password"
        Icon={BiLock}
        title="Password"
        desc='********'
      />
      <Comp_Card
        redirect="request-activation"
        className={profileContext?.is_verify ? 'green' : 'red'}
        Icon={profileContext?.is_verify ? BiUserCheck :BiUserX}
        title="Verify Account"
        desc={profileContext?.is_verify ? "Verify" : "Not Verify" || "Undefined"}
      />
      <Comp_Card
        Icon={BiCalendarPlus}
        title="Join At"
        desc={profileContext?.created_at || "Undefined"}
        className="gray"
      />
      <Comp_Card
        Icon={BiCalendarEdit}
        title="Updated At"
        desc={profileContext?.updated_at || "Undefined"}
        className="gray"
      />
    </Container>
  );
};

export default Profile;
