package fse.task.service;

import fse.task.model.Task;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.Date;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskServiceTest {

    @Resource
    private TaskService taskService;

    @Test
    public void findAllTasks() {
        final Task task1 = getTask();
        final Task task2 = getTask();
        taskService.addTask(task1);
        taskService.addTask(task2);
        assertTrue(taskService.findAllTasks().size() > 0);
    }

    @Test
    public void findById() {
        final Task task = getTask();
        taskService.addTask(task);
        assertNotNull(taskService.findById(task.getId()));
    }

    @Test
    public void updateTask() {
        final Task task = getTask();
        taskService.addTask(task);
        task.setPriority(10);
        taskService.updateTask(task);
        assertEquals(10, taskService.findById(task.getId()).getPriority(), 0);
    }

    @Test
    public void addTask() {
        final Task task = getTask();
        taskService.addTask(task);
        assertTrue(task.getId() != 0);
    }

    @Test
    public void deleteTask() {
        final Task task = getTask();
        taskService.addTask(task);
        taskService.deleteTask(task.getId());
        assertNull(taskService.findById(task.getId()));
    }

    private Task getTask() {
        final Task task = new Task();
        task.setPriority(5);
        task.setTask("Test");
        task.setStartDate(new Date());
        return task;
    }
}