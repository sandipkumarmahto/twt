import './register.css'

function RegisterPage(){
    return(
        <>
        <div className='main-container'>
            <div className="register-container">
                <div className="upper-container">
                    <div>
                        <p>x</p>
                    </div>
                    <div>
                        <img className='logo' src="https://img.freepik.com/premium-vector/twitter-new-x-logo-design-vector_1340851-70.jpg?semt=ais_user_personalization&w=740&q=80" alt="logo" />
                    </div>
                    <div>

                    </div>
                    
                    
                    
                </div>
                <div className="form-container">
                    <div>
                        <h2>
                        Create your account
                    </h2>
                    </div>
                    <form action="">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <input type="text" name="email" id="email" placeholder="email" />
                        <label htmlFor="dob">Date of birth</label>
                        <p>This will not be shown publically.Confirm your age,even if this account is for business, a pet, or something else.</p>
                        {/* <input type="date" name="dob" id="dob"  /> */}
                        <div className='dob'>
                            <select name="month" className='month' placeholder="month" id="">
                                <option value="">Month</option>
                                <option value="january">January</option>
                                <option value="february">february</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">june</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                            <select name="date" className='date' placeholder="Day" id="">
                                <option value="">Day</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="year" className="yaer" id="">
                                <option value="">Year</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                            </select>
                        </div>
                        {/* <div>
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div>
                            <input type="text" name="email" id="email" placeholder="email" />
                        </div>
                        <div>
                            <label htmlFor="dob">Date of birth</label>
                        </div>
                        <div>
                            <input type="date" name="dob" id="dob"  />
                        </div> */}
                        <button type='submit'>
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default RegisterPage;