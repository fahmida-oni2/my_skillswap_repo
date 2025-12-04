import React from 'react';


const Support = () => {
   return (
    <div className="flex flex-col min-h-screen ml-5 mr-5">
      <h1 className='text-center text-4xl font-bold mt-10 text-sky-800 animate__animated animate__fadeInDown'>SkillSwap Local Support Center</h1>

      <p className=" mb-12 mt-4 italic text-center animate__animated animate__fadeInUp max-w-3xl mx-auto">
        Welcome to the SkillSwap Local Support Center! Our goal is to make learning and trading skills easy and reliable. Find answers to common questions below.
      </p>

      {/* --- 1. Getting Started --- */}
      <div className="mt-3">
        <h2 className='text-2xl font-bold text-sky-800'>1. Getting Started</h2>
        
        <div className="faq-item mt-3">
          <p className="question"><strong>What is SkillSwap Local?</strong></p>
          <p className="answer">
            SkillSwap Local is a community platform dedicated to the local exchange of skills. Whether you want to learn guitar, teach coding, or find a yoga instructor, we connect you with verified experts and motivated learners in your neighborhood.
          </p>
        </div>

        <div className="faq-item">
          <p className="question"><strong>How do I join?</strong></p>
          <p className="answer">
            You can join by signing up with your email or social media account. Once registered, you can immediately create a profile detailing the skills you offer (as an Expert) and the skills you wish to learn (as a Learner).
          </p>
        </div>
        
        <div className="faq-item">
          <p className="question"><strong>What can I trade?</strong></p>
          <p className="answer">
            You can trade a wide variety of skills! This includes professional skills (coding, language, finance), creative arts (music, painting, photography), and wellness (yoga, fitness training, cooking). If you can teach it, you can trade it.
          </p>
        </div>
      </div>

      {/* --- 2. Connecting and Trading --- */}
      <div className="mt-5">
        <h2 className='text-2xl font-bold text-sky-800'>2. Connecting and Trading</h2>
        

        <div className="faq-item mt-3">
          <p className="question"><strong>How do I initiate a trade?</strong></p>
          <p className="answer">
            Once you find a suitable match:
            <br />
            - Click the "Connect" button on their profile.
            <br />
            - Send a message outlining the skill you wish to trade or learn, and propose a time and place for your first session (public locations are recommended initially).
          </p>
        </div>
        
        <div className="faq-item">
          <p className="question"><strong>Is trading based on money?</strong></p>
          <p className="answer">
            SkillSwap Local is primarily designed for skill exchange (bartering services) or using agreed-upon credit/time systems set by the local community or expert. Monetary payment terms are determined and agreed upon directly between the Learner and Expert.
          </p>
        </div>
      </div>

      {/* --- 3. Trust, Safety, and Ratings --- */}
      <div className="mt-5">
        <h2 className='text-2xl font-bold text-sky-800'>3. Trust, Safety, and Ratings</h2>
        
        <div className="faq-item mt-3">
          <p className="question"><strong>How is trust maintained on the platform?</strong></p>
          <p className="answer">
            Trust is built through our transparent rating and review system:
            <br />
            - Verified Profiles: All users must complete basic profile verification.
            <br />
            - Ratings: After every completed session or project, users are encouraged to rate their experience (1-5 stars).
            <br />
            - Reviews: Detailed feedback helps future users choose the best partners and allows experts to grow.
          </p>
        </div>

        <div className="faq-item">
          <p className="question"><strong>How do I leave a rating?</strong></p>
          <p className="answer">
            After a trade or session is marked as complete by both parties, you will receive a prompt in your dashboard to rate the other user based on quality, reliability, and communication.
          </p>
        </div>
        
        <div className="faq-item">
          <p className="question"><strong>What if I have a safety concern?</strong></p>
          <p className="answer">
            User safety is paramount. If you encounter inappropriate behavior, harassment, or feel unsafe:
            <br />
            - Immediately cease communication .
            <br />
            - Contact our support team directly at <a href="mailto:safety@skillswaplocal.com">safety@skillswaplocal.com</a> with details of the incident. We investigate all reports promptly.
          </p>
        </div>
        

      </div>
      
      {/* --- 4. Account and Profile Management --- */}
      <div className="mt-5">
        <h2 className='text-2xl font-bold text-sky-800'>4. Account and Profile Management</h2>
        
        <div className="faq-item mt-3">
          <p className="question"><strong>How do I update my profile and skills?</strong></p>
          <p className="answer">
            Go to **My Profile** in the top navigation menu. You can update your bio, profile picture..
          </p>
        </div>

        <div className="faq-item">
          <p className="question"><strong>I forgot my password.</strong></p>
          <p className="answer">
            Click the **"Forgot Password"** link on the login screen and follow the instructions to reset your password via email.
          </p>
        </div>
        
      </div>

      {/* --- Still Need Help? --- */}
      <div className="mt-5">
        <h2 className='text-2xl font-bold text-sky-800'>Still Need Help?</h2>
        <p>If you can't find an answer to your question, please reach out to us:</p>
        
        <p className='font-bold mb-3'>
          Email Support: <a href="mailto:support@skillswaplocal.com">support@skillswaplocal.com</a>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Support;