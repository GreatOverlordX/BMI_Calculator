const App = () => {
  const calculateBMI = () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // To convert height to metres

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDiv.textContent = 'Please enter valid values.';
      resultDiv.style.color = '#f00';
      return;
    }

    const bmi = weight / (height * height);
    const bmiRounded = bmi.toFixed(2);


    let category;
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI is <span>${bmiRounded}</span>.<br>Category: <span>${category}</span>`;
    resultDiv.style.color = '#000';
    const resultSpan = resultDiv.querySelectorAll('span');
    resultSpan.forEach((item) => {
      if (bmi < 18.5) {
        item.style.color = 'red';
      } else if (bmi < 25) {
        item.style.color= 'rgba(0, 213, 255, 1)';
        } else {
          item.style.color = 'red';
        }
    });
  };

  return (
    <div
      className={`calculator`}
      style={{
        height: '100vh',
        width: '100vh',
        padding: '20vh',
        backgroundColor: '#e3f2fd', // Colour: blue lighten-5
        textAlign: 'center',
        borderRadius: '30vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>BMI Calculator</h2><br/>
      <div>
        <label htmlFor="weight">Weight (Kg):</label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            marginBottom: '20px',
            borderRadius: '10px',
            display: 'flex',
          }}
        />
      </div>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          placeholder="Enter your height"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            marginBottom: '20px',
            borderRadius: '10px',
          }}
        />
      </div>
      <button
        onClick={calculateBMI}
        id="calculateBtn"
        style={{
          padding: '10px 20px',
          backgroundColor: '#b71c1c', // Colour: red darken-4
          color: '#fff',
          border: 'none',
          borderRadius: '5vh',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Calculate BMI
      </button>
      <div
        id="result"
        style={{
          marginTop: '20px',
          fontSize: '18px',
        }}
      ></div>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
