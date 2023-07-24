package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Entity.FeedBack;

public interface FeedRepo extends JpaRepository<FeedBack,Long> {

}

