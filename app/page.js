"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  useEffect(() => {
    // Load tasks from local storage when the component mounts
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setMainTask(JSON.parse(savedTasks));
    }
  }, []);

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const formHandler = (e) => {
    e.preventDefault();
    const newTasks = [...mainTask, { title, description }];
    setMainTask(newTasks);
    saveToLocalStorage(newTasks);
    setTitle("");
    setDescription("");
  };

  const deleteHandler = (index) => {
    let copyTasks = [...mainTask];
    copyTasks.splice(index, 1);
    setMainTask(copyTasks);
    saveToLocalStorage(copyTasks);
  };

  let showTask = <p className="text-gray-400">No tasks yet...</p>;
  if (mainTask.length > 0) {
    showTask = mainTask.map((task, index) => (
      <div
        key={index}
        className="flex justify-between items-center p-3 bg-zinc-800 rounded-lg mb-4"
      >
        <div>
          <h2 className="text-xl text-zinc-300">{task.title}</h2>
          <p className="text-zinc-400 text-sm">{task.description}</p>
        </div>
        <button
          className="px-2 py-1 bg-red-600 rounded-full"
          onClick={() => deleteHandler(index)}
        >
          <i className="ri-delete-bin-line text-white text-lg"></i>
        </button>
      </div>
    ));
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <div className="min-h-screen bg-zinc-900 text-zinc-300 flex flex-col items-center p-4">
        <header className="w-full max-w-4xl flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-orange-500">To-Do App</h1>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-zinc-300 hover:text-orange-500 cursor-pointer">
                Home
              </li>
              <li className="text-zinc-300 hover:text-orange-500 cursor-pointer">
                Features
              </li>
              <li className="text-zinc-300 hover:text-orange-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-col items-center text-center mt-20">
          <h2 className="text-5xl font-extrabold mb-6">Stay Organized</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
            Keep track of your tasks with our simple and efficient to-do app.
            Stay on top of your day, manage your to-do lists with ease, and
            achieve more!
          </p>
          <a
            href="/app"
            className="py-3 px-8 bg-orange-500 rounded-md text-white text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get Started
          </a>
        </main>

        <section className="w-full max-w-4xl mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center">
            <i className="ri-check-double-line text-5xl text-orange-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-zinc-400">
              Our intuitive interface lets you add, manage, and delete tasks
              effortlessly.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <i className="ri-smartphone-line text-5xl text-orange-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-zinc-400">
              Access your tasks on the go with our fully responsive design.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <i className="ri-calendar-check-line text-5xl text-orange-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Stay Organized</h3>
            <p className="text-zinc-400">
              Categorize your tasks and stay organized throughout your day.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <i className="ri-cloud-line text-5xl text-orange-500 mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Cloud Sync</h3>
            <p className="text-zinc-400">
              Sync your tasks across devices with our cloud storage feature.
            </p>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-zinc-900 text-zinc-300 flex flex-col items-center p-4 mt-20">
        <h1 className="text-4xl font-bold mb-20">My TODO's</h1>
        <form className="w-full max-w-md" onSubmit={formHandler}>
          <input
            className="p-3 mb-3 w-full border border-zinc-700 rounded-md bg-zinc-800 text-zinc-300"
            type="text"
            placeholder="Enter your task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="p-3 mb-3 w-full border border-zinc-700 rounded-md bg-zinc-800 text-zinc-300"
            type="text"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="w-full py-3 bg-orange-500 rounded-md text-white font-semibold">
            Add task
          </button>
        </form>
        <div className="w-full max-w-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">All tasks</h2>
          <div>{showTask}</div>
        </div>
      </div>

      <footer className="w-full max-w-9xl mt-20 text-center border-t border-zinc-700 pt-10">
        <p className="text-zinc-400">
          &copy; 2024 To-Do App. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Page;
