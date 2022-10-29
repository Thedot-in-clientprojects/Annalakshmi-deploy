import React from 'react';
import Link from "next/link";
import ProgressBar from "@ramonak/react-progress-bar";
import Split from "../../Split";
import skills from '../../../data/corporate/skills.json';

const Skills = () => {
  return (
    <section className="skills section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content">
              <h3 className="fw-700 mb-30">We always <br /> ready for a challenge.</h3>
              <p>Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives.</p>
              <Link href="/about-corporate">
                <a className="butn butn-md gr-sunrise-bg text-light radius-30 mt-30">
                  <Split>
                    <span className="text words chars splitting" data-splitting>About Company</span>
                  </Split>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="skills-box full-width">
              {
                skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <h6 className="text-u ls3 fz-13">{ skill.title }</h6>
                    <ProgressBar
                      completed={skill.progress}
                      className="skill-progress"
                      bgColor={'linear-gradient(-271deg, #ffcf6d, #fd8558)'}
                      baseBgColor={'#EBEBEB'}
                      height={"10px"}
                    />
                    <div className="flex mt-20">
                      <h2 className="fw-200">{ skill.progress } <span className="fz-30">%</span></h2>
                      <p>{ skill.description }</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills