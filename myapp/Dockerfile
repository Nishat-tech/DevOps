# 1. Base Image
# Use an official lightweight Python image as a parent image.
FROM python:3.9-slim

# 2. Working Directory
# Set the working directory inside the container to /app.
WORKDIR /app

# 3. Copy and Install Dependencies
# Copy the requirements file into the container at /app.
COPY requirements.txt .
# Install any needed packages specified in requirements.txt.
# --no-cache-dir reduces the image size.
RUN pip install --no-cache-dir -r requirements.txt

# 4. Copy Application Code
# Bundle the app's source code inside the Docker image.
COPY . .

# 5. Expose Port
# Make port 5000 available to the host machine.
# This assumes your application runs on port 5000.
EXPOSE 5000

# 6. Run Application
# Define the command to run your application.
CMD ["python", "app.py"]