import React from "react";
import { Typography, Box } from "@material-ui/core";

const Main = () => {
  return (
    <>
      <Typography variant="h4">My Story</Typography>
      <Typography>
        <Box lineHeight={2}>
          Before I could write, I began learning the violin. Later, I picked up
          the piano, trumpet, organ, and other instruments. Through many years
          of work and the luck of opportunity, I played at Carnegie Hall, the
          Kennedy Center, and other wonderful places. I loved music, but after
          college, my passion for it was dimming; the difficulty of trying to
          make a career out of music certainly wasn't helping.
        </Box>
      </Typography>
      <Typography style={{ lineHeight: "3" }}>
        So, I decided to pursue another interest and go to law school to become
        a lawyer. Law school turned out to be quite challenging, but I made it
        through, and passed the bar. Standing in front of a judge for the first
        time was both a proud accomplishment and nerve-racking experience.
        However, the legal work I fell into slowly became unfulfilling. I
        realized the lack of fulfillment wasn't from any particular legal job,
        but the field in general. As I was making this realization, I started
        learning to code.
      </Typography>
      <Typography variant="h4">Developer</Typography>
      <Typography>
        It didn't take long before I loved coding. I wanted to keep learning
        more, while my work in law was draining me. After a year of coding, I
        quit my job and began learning and developing software full-time. After
        making many small projects, I built this site to showcase what I'm
        capable of.
      </Typography>
    </>
  );
};

export default Main;
