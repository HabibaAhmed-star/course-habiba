
  document.addEventListener('DOMContentLoaded', () => {

    const ingredientsContainer = document.querySelector('#recipe-ingredients fieldset');
    const addIngredientBtn = document.getElementById('add-ingredient-btn');

    addIngredientBtn.addEventListener('click', () => {
      const newRow = document.createElement('div');
      newRow.classList.add('ingredient-row');
      newRow.innerHTML = `
        <input type="text" name="ingredients[][name]" placeholder="Ingredient (e.g., Flour)">
        <input type="text" name="ingredients[][amount]" placeholder="Amount (e.g., 2 cups)">
        <button type="button" class="remove-btn" aria-label="Remove ingredient">Remove</button>
      `;
      ingredientsContainer.appendChild(newRow);
    });

    const stepsContainer = document.querySelector('#recipe-instructions fieldset');
    const addStepBtn = document.getElementById('add-step-btn');

    addStepBtn.addEventListener('click', () => {
      const stepCount = stepsContainer.querySelectorAll('.step-row').length + 1;
      const newRow = document.createElement('div');
      newRow.classList.add('step-row');
      newRow.innerHTML = `
        <label for="step-${stepCount}">Step ${stepCount}</label>
        <textarea id="step-${stepCount}" name="steps[]" rows="2" placeholder="Describe this step..."></textarea>
        <button type="button" class="remove-btn" aria-label="Remove step ${stepCount}">Remove</button>
      `;
      stepsContainer.appendChild(newRow);
    });

   
    document.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('remove-btn')) {
        const row = e.target.closest('.ingredient-row, .step-row');
        if (row) {
          row.remove();
        }
      }
    });

  });
