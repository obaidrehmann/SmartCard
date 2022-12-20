import React from "react";
import Headers from "../../components/header/Headers";
import SecondaryNav from "../../components/header/SecondaryNav";
import LeaderShipTitle from "./leadershipSections/LeaderShipTitle";
import TeamLayoutOne from "./leadershipSections/TeamLayoutOne";
import DarkFooter from '../../components/footer/DarkFooter'

export default function LeadershipTeam() {
  return (
    <>
      <Headers />
      <LeaderShipTitle />
      <SecondaryNav/>
      <TeamLayoutOne/>
      <DarkFooter/>
    </>
  );
}
