import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorProfilePage.css";
const DoctorProfilePage = () => {
  const navigate = useNavigate();

  const onImage20IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="doctor-profile-page">
      <div className="appointments2">
        <div className="appointments-item" />
        <i className="appointments3">Appointments</i>
        <i className="k5">21.4K</i>
        <img
          className="icon-icofont-medical-cro1"
          alt=""
          src="/icon--icofont--medical--cross--first-aid1.svg"
        />
      </div>
      <div className="patients">
        <div className="patients-child" />
        <img
          className="icon-icofont-medical-hum"
          alt=""
          src="/icon--icofont--medical--human--crutch.svg"
        />
        <i className="k6">
          <p className="k7">166.3K</p>
        </i>
        <i className="patients1">
          <p className="k7">Patients</p>
        </i>
      </div>
      <div className="doctor-profile-page-child" />
      <div className="doctor-profile-page-item" />
      <div className="rectangle-parent28">
        <div className="component-child2" />
        <img
          className="icon-icofont-web-bank2"
          alt=""
          src="/icon--icofont--web--bank--bank1.svg"
        />
        <i className="k8">
          <p className="k7">$166.3K</p>
        </i>
        <i className="income2">Income</i>
      </div>
      <i className="k10">
        <p className="k7">166.3K</p>
      </i>
      <img className="d-ico-15-icon" alt="" src="/3d-ico-15.svg" />
      <img className="d-ico-07-icon" alt="" src="/3d-ico-07.svg" />
      <i className="clinic-consulting">Clinic Consulting</i>
      <i className="k12">
        <p className="k7">166.3K</p>
      </i>
      <i className="online-consulting31">Online Consulting</i>
      <div className="navbar16">
        <div className="navbar-child37" />
        <div className="navbar-child38" />
        <b className="community-forum16">
          <p className="k7">Community</p>
          <p className="k7">Forum</p>
        </b>
        <img className="image-11-icon16" alt="" src="/image-11@2x.png" />
        <img className="image-10-icon17" alt="" src="/image-10@2x.png" />
        <b className="schedule-appointment16">
          <p className="k7">Schedule</p>
          <p className="k7">Appointment</p>
        </b>
        <b className="support-ngos16">
          <p className="k7">Support</p>
          <p className="k7">NGO’s</p>
        </b>
        <img className="image-12-icon18" alt="" src="/image-12@2x.png" />
        <b className="personal-health-tracker-container16">
          <p className="k7">Personal</p>
          <p className="k7">{`Health Tracker `}</p>
        </b>
        <img className="image-15-icon17" alt="" src="/image-15@2x.png" />
        <b className="your-health-record-container16">
          <p className="k7">Your Health</p>
          <p className="k7">Record</p>
        </b>
        <img className="image-16-icon17" alt="" src="/image-16@2x.png" />
        <b className="health-cart16">Health cart</b>
        <img className="image-17-icon17" alt="" src="/image-17@2x.png" />
        <b className="wellness-reward-prgram16">Wellness Reward Prgram</b>
        <img
          className="image-20-icon19"
          alt=""
          src="/image-20@2x.png"
          onClick={onImage20IconClick}
        />
        <b className="loginsignup16">Login/Signup</b>
        <img className="image-18-icon18" alt="" src="/image-18@2x.png" />
        <b className="rewards16">Rewards</b>
        <b className="experience17">Experience</b>
        <img className="image-19-icon18" alt="" src="/image-19@2x.png" />
        <div className="navbar-child39" />
        <img
          className="healthcare-low-resolution-logo-icon16"
          alt=""
          src="/healthcarelowresolutionlogocolorontransparentbackground-2-1@2x.png"
        />
        <img className="image-9-icon17" alt="" src="/image-9@2x.png" />
      </div>
      <img className="image-9-icon18" alt="" src="/image-9@2x.png" />
      <div className="lefttable">
        <div className="lefttable-child" />
        <b className="recent-patients">Recent Patients</b>
        <div className="table-elements-columns-lar2">
          <img
            className="avatar-circled-woman-012"
            alt=""
            src="/avatar--circled--woman--012.svg"
          />
          <img
            className="avatar-circled-woman-022"
            alt=""
            src="/avatar--circled--woman--022.svg"
          />
          <img
            className="avatar-circled-woman-032"
            alt=""
            src="/avatar--circled--woman--032.svg"
          />
          <img
            className="avatar-circled-woman-042"
            alt=""
            src="/avatar--circled--woman--042.svg"
          />
          <img
            className="avatar-circled-woman-052"
            alt=""
            src="/avatar--circled--woman--052.svg"
          />
          <img
            className="avatar-circled-woman-062"
            alt=""
            src="/avatar--circled--woman--062.svg"
          />
          <img
            className="avatar-circled-woman-072"
            alt=""
            src="/avatar--circled--woman--072.svg"
          />
          <img
            className="avatar-circled-woman-082"
            alt=""
            src="/avatar--circled--woman--082.svg"
          />
          <img
            className="avatar-circled-woman-092"
            alt=""
            src="/avatar--circled--woman--092.svg"
          />
          <img
            className="avatar-circled-woman-102"
            alt=""
            src="/avatar--circled--woman--102.svg"
          />
          <img
            className="avatar-circled-man-012"
            alt=""
            src="/avatar--circled--man--012.svg"
          />
          <img
            className="avatar-circled-man-022"
            alt=""
            src="/avatar--circled--man--022.svg"
          />
          <img
            className="avatar-circled-man-032"
            alt=""
            src="/avatar--circled--man--032.svg"
          />
          <img
            className="avatar-circled-man-042"
            alt=""
            src="/avatar--circled--man--042.svg"
          />
          <img
            className="avatar-circled-man-052"
            alt=""
            src="/avatar--circled--man--052.svg"
          />
          <img
            className="avatar-circled-man-062"
            alt=""
            src="/avatar--circled--man--062.svg"
          />
          <img
            className="avatar-circled-man-072"
            alt=""
            src="/avatar--circled--man--072.svg"
          />
          <img
            className="avatar-circled-man-082"
            alt=""
            src="/avatar--circled--man--082.svg"
          />
          <img
            className="avatar-circled-man-092"
            alt=""
            src="/avatar--circled--man--092.svg"
          />
          <img
            className="avatar-circled-man-102"
            alt=""
            src="/avatar--circled--man--102.svg"
          />
          <b className="name">Name</b>
        </div>
        <b className="name1">Name</b>
        <div className="table-elements-columns-lar3">
          <b className="title1">Title</b>
          <div className="column1">
            <div className="column-011">Leslie Alexander</div>
            <div className="column-021">Ronald Richards</div>
            <div className="column-031">Jane Cooper</div>
            <div className="column-041">Robert Fox</div>
            <div className="column-051">Jenny Wilson</div>
            <div className="column-061">Large</div>
            <div className="column-071">Large</div>
            <div className="column-081">Large</div>
            <div className="column-091">Large</div>
            <div className="column-101">Large</div>
            <div className="column-111">Large</div>
            <div className="column-121">Large</div>
            <div className="column-131">Large</div>
            <div className="column-141">Large</div>
            <div className="column-151">Large</div>
            <div className="column-161">Large</div>
            <div className="column-171">Large</div>
            <div className="column-181">Large</div>
            <div className="column-191">Large</div>
            <div className="column-201">Large</div>
            <div className="column-211">Large</div>
            <div className="column-221">Large</div>
            <div className="column-231">Large</div>
            <div className="column-241">Large</div>
            <div className="column-251">Large</div>
            <div className="column-261">Large</div>
            <div className="column-271">Large</div>
            <div className="column-281">Large</div>
            <div className="column-291">Large</div>
            <div className="column-301">Large</div>
            <div className="column-311">Large</div>
            <div className="column-321">Large</div>
            <div className="column-331">Large</div>
            <div className="column-341">Large</div>
            <div className="column-351">Large</div>
            <div className="column-361">Large</div>
            <div className="column-371">Large</div>
            <div className="column-381">Large</div>
            <div className="column-391">Large</div>
          </div>
        </div>
        <div className="lefttable-item" />
        <div className="lefttable-inner" />
        <div className="lefttable-child1" />
        <div className="lefttable-child2" />
        <div className="lefttable-child3" />
        <div className="table-elements-columns-lar4">
          <b className="title1">Title</b>
          <div className="column2">
            <div className="column-012">Send a personalnote/Badge</div>
            <div className="column-022">Send a personalnote/Badge</div>
            <div className="column-032">Send a personalnote/Badge</div>
            <div className="column-042">Send a personalnote/Badge</div>
            <div className="column-052">Send a personalnote/Badge</div>
            <div className="column-062">Large</div>
            <div className="column-072">Large</div>
            <div className="column-082">Large</div>
            <div className="column-092">Large</div>
            <div className="column-102">Large</div>
            <div className="column-112">Large</div>
            <div className="column-122">Large</div>
            <div className="column-132">Large</div>
            <div className="column-142">Large</div>
            <div className="column-152">Large</div>
            <div className="column-162">Large</div>
            <div className="column-172">Large</div>
            <div className="column-182">Large</div>
            <div className="column-192">Large</div>
            <div className="column-202">Large</div>
            <div className="column-212">Large</div>
            <div className="column-222">Large</div>
            <div className="column-232">Large</div>
            <div className="column-242">Large</div>
            <div className="column-252">Large</div>
            <div className="column-262">Large</div>
            <div className="column-272">Large</div>
            <div className="column-282">Large</div>
            <div className="column-292">Large</div>
            <div className="column-302">Large</div>
            <div className="column-312">Large</div>
            <div className="column-322">Large</div>
            <div className="column-332">Large</div>
            <div className="column-342">Large</div>
            <div className="column-352">Large</div>
            <div className="column-362">Large</div>
            <div className="column-372">Large</div>
            <div className="column-382">Large</div>
            <div className="column-392">Large</div>
          </div>
        </div>
        <b className="show-all">Show all</b>
      </div>
      <img className="image-21-icon2" alt="" src="/image-21@2x.png" />
    </div>
  );
};

export default DoctorProfilePage;
