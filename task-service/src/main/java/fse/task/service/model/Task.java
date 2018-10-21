package fse.task.service.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;

    private String summary;

    private Date startDate;

    private Date endDate;

    private Integer priority;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private ParentTask parentTask;
}
