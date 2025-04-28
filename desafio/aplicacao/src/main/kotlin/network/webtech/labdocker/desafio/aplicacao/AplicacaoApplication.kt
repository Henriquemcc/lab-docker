package network.webtech.labdocker.desafio.aplicacao

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class AplicacaoApplication

fun main(args: Array<String>) {
	runApplication<AplicacaoApplication>(*args)
}
