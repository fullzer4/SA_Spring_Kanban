package com.kanban.backend.controller;

import com.kanban.backend.Model.Task;
import com.kanban.backend.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping("/Tasks/add")
    public Task addTask(@RequestBody Task task){
        return taskRepository.save(task);
    }

    @PostMapping("/Tasks/get")
    public ResponseEntity<List<Task>> findAll(){
        return ResponseEntity.ok(taskRepository.findAll());
    }

    @GetMapping("/tasks/updateTask/{id}")
    public ResponseEntity<Task> findTaskId(@PathVariable(value = "id") Integer id){
        Task task = taskRepository.findById(id).orElseThrow(
            ()-> new ResourceNotFound("Task not found: " + id));
            return ResponseEntity.ok().body(task);
    }

    @DeleteMapping("/tasks/delete/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable(value = "id") Integer id){
        Task task = taskRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFound("Task not found: " + id));
        taskRepository.delete(task);
        return ResponseEntity.ok().build();
    }
}
