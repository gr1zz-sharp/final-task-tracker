package com.example.finaltasktracker.Repository;

import com.example.finaltasktracker.Model.Tasks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Tasks, Integer>, JpaSpecificationExecutor<Tasks> {
}
