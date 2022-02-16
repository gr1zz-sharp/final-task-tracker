package com.example.finaltasktracker.Controller;


import com.example.finaltasktracker.Model.Tasks;
import com.example.finaltasktracker.Service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class TaskController {

    @Autowired
    TaskService taskService;

    //
    //Get
    //

    @GetMapping(path = "/tasks")
    public List<Tasks> getTasks() {
        return taskService.getTasks();
    }

    //
    //Post
    //

    @PostMapping(path = "/addTask")
    public Tasks addTask(@RequestBody Tasks tasks) {
        return taskService.saveTask(tasks);
    }

    //
    //Put
    //

}
