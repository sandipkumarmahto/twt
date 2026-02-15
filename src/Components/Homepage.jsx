import "./home.css"

function Homepage(){
    return(<>
        <div className="container">
  <div className="main">
    <div className="logo">
      <img src="https://res.cloudinary.com/ddojnr1zn/image/upload/v1771078517/logo_qajzj9.png" alt="" />
    </div>
    <div className="nav">
      <div className="items">
        <div className="happening">
          <span>Happenig now</span>
        </div>
        <div className="join-today">
          <span>join today.</span>
        </div>
        <div className="signup-g">
          <div>
            <img src="https://res.cloudinary.com/ddojnr1zn/image/upload/v1771078516/google_fomlh7.png" alt="" />
          </div>
          <div>
            <span>Sign up with Google</span>
          </div>
        </div>
        <div className="signup-a">
          <div>
            <img src="https://res.cloudinary.com/ddojnr1zn/image/upload/v1771078516/apple_yknpar.jpg" alt="" />
          </div>
          <div>
            <span>Sign up with Apple</span>
          </div>
        </div>
        <div className="or">
          <span>OR</span>
        </div>
        <div className="create">
          <button>Create account</button>
        </div>
        <div className="term">
          <span>
            By signing up, you agree to the <a href="">Terms of Service</a> and{" "}
            <a href="">Privacy Policy</a>, including <a href="">Cooking Use</a>
          </span>
        </div>
        <div className="already">
          <span>Already have an account?</span>
        </div>
        <div className="sign-in">
          <button>Sign in</button>
        </div>
        <div className="grok">
          <button>Get Grok</button>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>)
}

export default Homepage;