let scrollStarted = false;

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set your target counts and increment values here
  const targetUserCount = 124873;
  const targetTeacherCount = 243;
  const targetClassCount = 386;
  const targetLectureCount = 34816;

  const userIncrement = 409;  // Increment for user count
  const teacherIncrement = 1;  // Increment for teacher count
  const classIncrement = 2;  // Increment for class count
  const lectureIncrement = 132;  // Increment for lecture count

  // Call the function to start counting
  startCounting(
    targetUserCount, targetTeacherCount, targetClassCount, targetLectureCount,
    userIncrement, teacherIncrement, classIncrement, lectureIncrement
  );
});

// Define the startCounting function here
function startCounting(targetUserCount, targetTeacherCount, targetClassCount, targetLectureCount,
  userIncrement, teacherIncrement, classIncrement, lectureIncrement) {
  // Your counting logic goes here
  // You can use setInterval or other methods to increment the counts over time
}

function startCounting(
  maxUserCount, maxTeacherCount, maxClassCount, maxLectureCount,
  userIncrement, teacherIncrement, classIncrement, lectureIncrement
) {
  const userCountElement = document.getElementById('userCount');
  const teacherCountElement = document.getElementById('teacherCount');
  const classCountElement = document.getElementById('classCount');
  const lectureCountElement = document.getElementById('lectureCount');

  let currentCounts = {
    user: 0,
    teacher: 0,
    class: 0,
    lecture: 0
  };

  const interval = 1; // Update interval in milliseconds

  const countingInterval = setInterval(() => {
    // Update the counts based on the increment values
    if (currentCounts.user < maxUserCount) {
      currentCounts.user += userIncrement;
      userCountElement.textContent = Math.min(currentCounts.user, maxUserCount);
    }

    if (currentCounts.teacher < maxTeacherCount) {
      currentCounts.teacher += teacherIncrement;
      teacherCountElement.textContent = Math.min(currentCounts.teacher, maxTeacherCount);
    }

    if (currentCounts.class < maxClassCount) {
      currentCounts.class += classIncrement;
      classCountElement.textContent = Math.min(currentCounts.class, maxClassCount);
    }

    if (currentCounts.lecture < maxLectureCount) {
      currentCounts.lecture += lectureIncrement;
      lectureCountElement.textContent = Math.min(currentCounts.lecture, maxLectureCount);
    }

    // Check if all counts have reached their maximum
    if (
      currentCounts.user >= maxUserCount &&
      currentCounts.teacher >= maxTeacherCount &&
      currentCounts.class >= maxClassCount &&
      currentCounts.lecture >= maxLectureCount
    ) {
      clearInterval(countingInterval); // Stop the counting
    }
  }, interval);
}
