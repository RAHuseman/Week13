import './Main.css';

const Main = () => {
    return (
        <div id="Main" >
            <form id="main_Form">
               <label for="fname">Username:
                    </label>
               <br/>
                    <input type="text" id="input2" name="input2"/>
                <br/>
               <label for="lname">Password:</label><br/>
                <input type="text" id="input2" name="input2"/><br/>
            
            <br/>
            <h3>Log In</h3>
            </form>
            
        </div>
    );
}

export default Main;