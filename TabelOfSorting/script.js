document.addEventListener("DOMContentLoaded", function () {
    const baseUrl = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
    let currentPage = 1;
    let currentLimit = 10;
    let currentFilterBy = "";
    let currentFilterValue = "";
    let currentSortOrder = "";

    const departmentFilter = document.getElementById("department-filter");
    const genderFilter = document.getElementById("gender-filter");
    const sortOrder = document.getElementById("sort-order");
    const employeeList = document.getElementById("employee-list");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageNum = document.getElementById("page-num");


    function fetchData() {
        const url = `${baseUrl}?page=${currentPage}&limit=${currentLimit}&filterBy=${currentFilterBy}&filterValue=${currentFilterValue}&sort=${currentSortOrder}`;
        console.log("Fetching data from:", url);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Data received:", data);
                displayData(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }


    // Display data in table

    function displayData(response) {
        const data = response.data;
        employeeList.innerHTML = "";
        if (Array.isArray(data)) {
            data.forEach((employee, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.gender}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
            `;
                employeeList.appendChild(row);
            });
        } else {
            console.error("Data is not in the expected format:", response);
        }
    }



    // Event listener for department filter
    departmentFilter.addEventListener("change", function () {
        currentFilterBy = "department";
        currentFilterValue = this.value;
        fetchData();
    });

    // Event listener for gender filter
    genderFilter.addEventListener("change", function () {
        currentFilterBy = "gender";
        currentFilterValue = this.value;
        fetchData();
    });

    // Event listener for sort order
    sortOrder.addEventListener("change", function () {
        currentSortOrder = this.value;
        fetchData();
    });

    // Event listener for previous button
    prevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            fetchData();
        }
    });

    // Event listener for next button
    nextBtn.addEventListener("click", function () {
        currentPage++;
        fetchData();
    });

    // Initial fetch on page load
    fetchData();
});
