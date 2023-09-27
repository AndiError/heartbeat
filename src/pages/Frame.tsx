import { FunctionComponent, useCallback } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  const onButton1Click = useCallback(() => {
    window.open("https://martapavlivna.com");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open("https://martapavlivna.com");
  }, []);

  return (
    <div className={styles.headerParent}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.workout}>WORKOUT</div>
          <div className={styles.menulinks}>
            <nav className={styles.links}>
              <div className={styles.exercises}>EXERCISES</div>
              <div className={styles.exercises}>TRAINERS</div>
              <div className={styles.exercises}>PRICING</div>
              <div className={styles.login}>LOGIN</div>
            </nav>
            <button className={styles.hamburgerIcon}>
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.herosection}>
        <div className={styles.frameParent}>
          <section className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
              <div className={styles.new}>NEW</div>
              <div className={styles.highIntensityWorkout}>
                High Intensity workout to burn calories
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.preview}>Preview</div>
            </button>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.cardioExerciseWrapper}>
                <div className={styles.cardioExercise}>
                  <p className={styles.cardio}>{`Cardio `}</p>
                  <p className={styles.cardio}>Exercise</p>
                </div>
              </div>
            </div>
            <button
              className={styles.button1}
              type="submit"
              form="formID"
              onClick={onButton1Click}
            >
              <div className={styles.getStarted}>Get Started</div>
            </button>
          </section>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.videolessons}>
        <div className={styles.section2}>
          <div className={styles.nav}>
            <div className={styles.popularExercises}>Popular Exercises</div>
            <div className={styles.seeMoreExercises}>SEE MORE EXERCISES</div>
          </div>
          <section className={styles.frameGroup}>
            <div className={styles.groupContainer}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-6@2x.png"
                />
                <div className={styles.treadmill}>Treadmill</div>
                <div className={styles.estCalories}>{`250 est calories `}</div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>58:24</div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-61@2x.png"
                />
                <div className={styles.treadmill}>Running</div>
                <div className={styles.estCalories}>{`250 est calories `}</div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>58:24</div>
                </div>
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-62@2x.png"
                />
                <div className={styles.treadmill}>Stretching</div>
                <div className={styles.estCalories}>{`250 est calories `}</div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>58:24</div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-63@2x.png"
                />
                <div className={styles.treadmill}>Lifting</div>
                <div className={styles.estCalories}>{`250 est calories `}</div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>58:24</div>
                </div>
              </div>
            </div>
            <div className={styles.groupParent4}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-64@2x.png"
                />
                <div className={styles.treadmill}>Yoga</div>
                <div className={styles.estCalories}>{`250 est calories `}</div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>58:24</div>
                </div>
              </div>
              <div className={styles.groupDiv}>
                <img
                  className={styles.groupInner}
                  alt=""
                  src="/group-65@2x.png"
                />
                <div className={styles.treadmill}>PushUp</div>
                <div className={styles.estCalories}>{`250 est calories `}</div>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.rectangleIcon}
                    alt=""
                    src="/rectangle-10.svg"
                  />
                  <div className={styles.div}>58:24</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.programs}>
        <div className={styles.traineecallout}>
          <div className={styles.frameautolayout}>
            <div className={styles.workouttitle}>
              <img
                className={styles.workouttitleChild}
                alt=""
                src="/group-141.svg"
              />
              <div className={styles.workoutProgramMadeContainer}>
                <p className={styles.cardio}>Workout</p>
                <p className={styles.cardio}>Program</p>
                <p className={styles.cardio}>Made</p>
                <p className={styles.cardio}>For You</p>
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                consectetur adipiscing.
              </div>
              <button
                className={styles.button2}
                type="submit"
                form="formID"
                onClick={onButton2Click}
              >
                <div className={styles.getStarted}>Get Started</div>
              </button>
            </div>
          </div>
          <div className={styles.traineecalloutChild} />
        </div>
        <div className={styles.traineeimagesParent}>
          <div className={styles.traineeimages}>
            <div className={styles.frameContainer}>
              <div className={styles.groupParent7}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-147@2x.png"
                />
                <div className={styles.karenSummerParent}>
                  <div className={styles.karenSummer}>Karen Summer</div>
                  <div className={styles.trainer}>Trainer</div>
                </div>
              </div>
              <div className={styles.groupParent8}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-142@2x.png"
                />
                <div className={styles.samanthaWilliamParent}>
                  <div className={styles.karenSummer}>Samantha William</div>
                  <div className={styles.trainer}>Trainer</div>
                </div>
              </div>
              <div className={styles.groupParent9}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-146@2x.png"
                />
                <div className={styles.jonathanWiseParent}>
                  <div className={styles.karenSummer}>Jonathan Wise</div>
                  <div className={styles.trainer}>Trainer</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tablet}>
            <div className={styles.trainer3}>
              <img
                className={styles.trainer3Child}
                alt=""
                src="/group-1471@2x.png"
              />
              <div className={styles.karenSummer1}>Karen Summer</div>
              <div className={styles.trainer4}>Trainer</div>
            </div>
            <div className={styles.trainer21}>
              <img
                className={styles.trainer2Child}
                alt=""
                src="/group-1461@2x.png"
              />
              <div className={styles.jonathanWise1}>Jonathan Wise</div>
              <div className={styles.trainer5}>Trainer</div>
            </div>
            <div className={styles.trainer11}>
              <img
                className={styles.trainer1Child}
                alt=""
                src="/group-1421@2x.png"
              />
              <div className={styles.samanthaWilliam1}>Samantha William</div>
              <div className={styles.trainer6}>Trainer</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categoriessection}>
        <div className={styles.categoriescolumn}>
          <div className={styles.category}>
            <div className={styles.div6}>01</div>
            <div className={styles.action}>
              <div className={styles.titles}>
                <div className={styles.title}>Workout at Home</div>
                <div className={styles.courses}>15 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>02</div>
            <div className={styles.action}>
              <div className={styles.titles}>
                <div className={styles.title}>Stay Strong and Fit</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>03</div>
            <div className={styles.action}>
              <div className={styles.titles}>
                <div className={styles.title}>High Intensity</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>04</div>
            <div className={styles.action}>
              <div className={styles.titles}>
                <div className={styles.title}>Simple Workout</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
          <div className={styles.category}>
            <div className={styles.div6}>05</div>
            <div className={styles.action}>
              <div className={styles.titles}>
                <div className={styles.title}>Burn Calories</div>
                <div className={styles.courses}>48 videos</div>
              </div>
              <img className={styles.arrowIcon} alt="" src="/arrow.svg" />
            </div>
          </div>
          <img className={styles.separatorIcon} alt="" src="/separator.svg" />
        </div>
      </div>
      <div className={styles.subscribe}>
        <div className={styles.subscribeform}>
          <div className={styles.title5}>Get the Newsletter</div>
          <form className={styles.form} id="formID">
            <input className={styles.input} placeholder="Email" type="text" />
            <button className={styles.button3} type="submit" form="formID">
              <div className={styles.getStarted}>Subscribe</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Frame;
