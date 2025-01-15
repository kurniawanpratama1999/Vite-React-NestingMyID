import React, { useState } from "react";
import Container from "../../components/Container";
import {
  BiCalendarEdit,
  BiCalendarPlus,
  BiEnvelope,
  BiImage,
  BiLock,
  BiUser,
  BiUserPin,
  BiUserX,
} from "react-icons/bi";

import "../../assets/styles/page_styles/05-Profile/profile.css";
import Comp_Card from "./Comp_Card";

const Profile = () => {
  const [display_name, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerify, setIsVerify] = useState("");
  const [joinAt, setJoinAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  return (
    <Container id="profile" className="grid">
      <Comp_Card redirect="change-name" Icon={BiUser} title="Display Name" desc={display_name} />
      <Comp_Card redirect="change-username" Icon={BiUserPin} title="Username" desc={username} />
      <Comp_Card redirect="change-email" Icon={BiEnvelope} title="Email" desc={email} />
      <Comp_Card redirect="change-password" Icon={BiLock} title="Password" desc={password} />
      <Comp_Card redirect="request-activation" Icon={BiUserX} title="Verify Account" desc={isVerify} />
      <Comp_Card Icon={BiCalendarPlus} title="Join At" desc={joinAt} className="gray" />
      <Comp_Card Icon={BiCalendarEdit} title="Updated At" desc={updatedAt} className="gray" />
    </Container>
  );
};

export default Profile;
