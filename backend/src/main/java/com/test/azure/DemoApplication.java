package com.test.azure;

import com.test.azure.ad.azureadtest.GreetingWebClient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import lombok.val;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		val gwc = new GreetingWebClient();
		System.out.println(gwc.getResult());
	}

}
