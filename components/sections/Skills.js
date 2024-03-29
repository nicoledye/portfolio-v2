import styled from "@emotion/styled";
import {
  faJs,
  faNodeJs,
  faReact,
  faCss3,
  faHtml5,
  faPython,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { above, below } from "../../utils";

const Skills = () => {
  const icons = [
    "1-Ps.svg",
    "2-Ai.svg",
    "3-Id.svg",
    "4-Xd.svg",
    "5-Lr.svg",
    "6-Figma.svg",
    "7-Wordpress.svg",
    "8-CSS.svg",
    "9-HTML.svg",
    "10-invision.svg",
  ];

  return (
    <SkillsSection>
      <SkillsList>
        {icons.map((icon, i) => (
          <li key={i}>
            <img src={`/images/${icon}`} alt="" />
          </li>
        ))}
      </SkillsList>
    </SkillsSection>
  );
};

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  background: var(--skillsBackground);
  padding: 1.25rem 0;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1), 0px -5px 10px rgba(0, 0, 0, 0.1);
`;

const SkillsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  list-style: none;
  padding: 0;

  li {
    width: calc(25% - 10px);

    &::not(:last-of-type) {
      margin-right: 10px;
    }

    ${above.desktop`
        width: calc(8% - 10px);
  `}
  }

  img {
    width: 100%;
  }
`;

export default Skills;
