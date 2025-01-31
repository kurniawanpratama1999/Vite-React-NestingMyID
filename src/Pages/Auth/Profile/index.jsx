import { useContext } from "react";
import { Container } from "@/Components";
import {
  BiCalendarEdit,
  BiCalendarPlus,
  BiEnvelope,
  BiLock,
  BiUser,
  BiUserCheck,
  BiUserPin,
  BiUserX,
} from "react-icons/bi";

import Comp_Card from "./Card";
import { ProfileProvider, HookContext } from "@/Contexts";

const ProfileSetting = () => {
  const profileContext = useContext(HookContext);
  return (
    <Container id="profile" className="grid">
      <Comp_Card
        redirect="change-name"
        Icon={BiUser}
        title="Display Name"
        desc={profileContext?.displayName || "Undefined"}
      />
      <Comp_Card
        redirect="change-username"
        Icon={BiUserPin}
        title="Username"
        desc={profileContext?.username || "Undefined"}
      />
      <Comp_Card
        redirect="change-email"
        Icon={BiEnvelope}
        title="Email"
        desc={profileContext?.email || "Undefined"}
      />
      <Comp_Card
        redirect="insert-password"
        Icon={BiLock}
        title="Password"
        desc="********"
      />
      <Comp_Card
        redirect="request-activation"
        className={profileContext?.isVerify ? "green" : "red"}
        Icon={profileContext?.isVerify ? BiUserCheck : BiUserX}
        title="Verify Account"
        desc={profileContext?.isVerify ? "Verify" : "Not Verify" || "Undefined"}
      />
      <Comp_Card
        Icon={BiCalendarPlus}
        title="Join At"
        desc={profileContext?.accountCreated || "Undefined"}
        className="gray"
      />
      <Comp_Card
        Icon={BiCalendarEdit}
        title="Updated At"
        desc={profileContext?.accountUpdated || "Undefined"}
        className="gray"
      />
    </Container>
  );
};

const Profile = () => {
  return (
    <ProfileProvider>
      <ProfileSetting />
    </ProfileProvider>
  );
};
export default Profile;
