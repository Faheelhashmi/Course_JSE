let userRole="Faheel";
let accessLevel;


if (userRole=="admin"){
	accessLevel=" Full access";
}
else if (userRole=="Manager"){
	accessLevel="Limited";

	}
else{
	accessLevel="None";
	}
	

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("AccessLevel:",accessLevel);
console.log("User Message:",userMessage);
console.log("User Category:",userCategory);
