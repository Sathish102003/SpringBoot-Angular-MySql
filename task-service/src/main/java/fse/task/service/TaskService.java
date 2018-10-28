package fse.task.service;

import fse.task.model.ParentTask;
import fse.task.model.Task;
import fse.task.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Resource
    private TaskRepository taskRepository;

    public List<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    public Task findById(final long id) {
        final Optional<Task> task = taskRepository.findById(id);
        return task.orElse(null);
    }

    @Transactional
    public void updateTask(final Task task) {
        taskRepository.save(task);
    }

    @Transactional
    public void addTask(final Task task) {
        taskRepository.save(task);
    }

    @Transactional
    public void deleteTask(final long id) {
        taskRepository.deleteById(id);
    }
}
