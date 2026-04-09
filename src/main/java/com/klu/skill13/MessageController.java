package com.klu.skill13;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
public class MessageController {

    @GetMapping("/api/message")
    public String message() {
        return "Backend is working!";
    }
}