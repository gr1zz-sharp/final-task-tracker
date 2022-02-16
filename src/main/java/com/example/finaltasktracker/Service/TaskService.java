package com.example.finaltasktracker.Service;

import com.example.finaltasktracker.Model.Tasks;
import com.example.finaltasktracker.Repository.TaskRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaskService {
    private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Tasks> getTasks() {
        return taskRepository.findAll();
    }

    public Tasks saveTask(Tasks tasks) {
        return taskRepository.save(tasks);
    }
}
