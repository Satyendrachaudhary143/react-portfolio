function Skill() {
    document.querySelectorAll('.circular-progress').forEach((progressBar) => {
        const progressValue = progressBar.querySelector('.progress-value');
        const progress = progressBar.getAttribute('data-progress');
        progressBar.style.setProperty('--progress', `${progress}%`);
        progressValue.textContent = `${progress}%`;
      });

  return (
    <section className="skills-section" id="skills">
         <div className="container">
            <h2 className="section-title">Skills</h2>
     
            <div className="skill-categories">
           
               <div className="skill-category">
                  <div className="slider">

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="90">
                           <span className="progress-value">90%</span>
                        </div>
                        <h4>HTML</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="85">
                           <span className="progress-value">85%</span>
                        </div>
                        <h4>CSS</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="95">
                           <span className="progress-value">95%</span>
                        </div>
                        <h4>Bootstrap</h4>
                     </div>
                     <div className="skill-card">
                        <div className="circular-progress" data-progress="95">
                           <span className="progress-value">95%</span>
                        </div>
                        <h4>Tailwind css</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="80">
                           <span className="progress-value">80%</span>
                        </div>
                        <h4>JavaScript</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="90">
                           <span className="progress-value">90%</span>
                        </div>
                        <h4>React</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="80">
                           <span className="progress-value">80%</span>
                        </div>
                        <h4>Node js</h4>
                     </div>

                    

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="90">
                           <span className="progress-value">90%</span>
                        </div>
                        <h4>Express</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="80">
                           <span className="progress-value">80%</span>
                        </div>
                        <h4>Mongodb</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="80">
                           <span className="progress-value">80%</span>
                        </div>
                        <h4>Mysql</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="70">
                           <span className="progress-value">70%</span>
                        </div>
                        <h4>php</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="75">
                           <span className="progress-value">75%</span>
                        </div>
                        <h4>Java</h4>
                     </div>

                     <div className="skill-card">
                        <div className="circular-progress" data-progress="90">
                           <span className="progress-value">90%</span>
                        </div>
                        <h4>DSA</h4>
                     </div>


                  </div>
               </div>
            </div>
         </div>
      </section>
  );
}
export default Skill;