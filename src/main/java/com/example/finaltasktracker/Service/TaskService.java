package com.example.finaltasktracker.Service;

import com.example.finaltasktracker.Model.Tasks;
import com.example.finaltasktracker.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaskService {

    @Autowired
    private JdbcTemplate template;

    private final String UPDATE_TASK = "update tasks set task = ? where id = ?";
    private final String UPDATE_STATUS = "update tasks set status = ? where id = ?";

    private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    //
    //Get
    //

    public List<Tasks> getTasks() {
        return taskRepository.findAll();
    }

    //
    //Post
    //

    public Tasks saveTask(Tasks tasks) {
        return taskRepository.save(tasks);
    }

    public String deleteTask(int id) {
        taskRepository.deleteById(id);
        return "Successfully Deleted Task";
    }

    //
    //Put
    //

    public Tasks updateTask(Tasks tasks) {
        template.update(UPDATE_TASK, tasks.getTask(), tasks.getId());
        return tasks;
    }

    public Tasks updateStatus(Tasks tasks) {
        template.update(UPDATE_STATUS, tasks.getStatus(), tasks.getId());
        return tasks;
    }
}
