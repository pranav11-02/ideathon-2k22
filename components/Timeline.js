import React from "react";
import { useEffect } from "react";
import styles from "../styles/Timeline.module.css";

const Timeline = () => {
  const isScrollIntoView = (elem, index) => {
    console.log(elem, "i am elem");
    console.log(elem.offsetTop, "i am here for help");

    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.outerHeight;
    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + window.outerHeight * 0.5;

    console.log(docViewTop, "i am top");
    console.log(docViewBottom, "i am bottom");
    console.log(elemTop, "i am element of top");
    console.log(elemBottom, "i am element of bottom");

    if (elemBottom <= docViewBottom && elemTop >= docViewTop) {
      elem.classList.add("Timeline_active__W32K6");
    }
    if (!(elemBottom <= docViewBottom)) {
      elem.classList.remove("Timeline_active__W32K6");
    }

    var MainTimelineContainer = document?.getElementById(
      "vertical_scrollable_timeline"
    );
    var MainTimelineContainerBottom =
      MainTimelineContainer.getBoundingClientRect().bottom -
      window.innerHeight * 0.5;

    MainTimelineContainer.querySelector("#inner").style.height =
      MainTimelineContainerBottom + "px";
  };

  useEffect(() => {
    const handleScroll = () => {
      var timeline = document?.getElementById("vertical_scrollable_timeline");
      var timelineNew = timeline.getElementsByTagName("li");
      console.log(timelineNew);
      console.log(timelineNew.length);
      Array.from(timelineNew).forEach(isScrollIntoView);
    };

    console.log("hello");

    // clean up code
    // window.removeEventListener("scroll", isScrollIntoView);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.timeline_container}>
      <ul
        className={styles.vertical_scrollable_timeline}
        id="vertical_scrollable_timeline"
      >
        <div className={styles.list_progress}>
          <div className={styles.inner} id="inner"></div>
        </div>
        <li>
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad
            dignissimos libero sunt, quisquam numquam aliquam? Voluptas,
            accusamus omnis? Molestiae, aliquam?
          </p>
          <div className={styles.icon_holder}></div>
        </li>
        <li>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi
            necessitatibus aperiam repudiandae nam omnis est vel quo, nihil
            repellat quia velit error modi earum similique odit labore.
            Doloremque, repudiandae?
          </p>
          <div className={styles.icon_holder}></div>
        </li>
        <li>
          <h2>Contact us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero
            quisquam, rem assumenda similique voluptas distinctio, iste est hic
            eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis
            autem?
          </p>
          <div className={styles.icon_holder}></div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
