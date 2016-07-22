package database;

import org.junit.Test;

public class CarroTest {

	@Test
	public void testAttributes() {
		Carro car = new Carro();
		car.setId(1);
		car.setNome("danilo");
		
		assert car.getId() == 1;
		assert car.getNome().equals("Didox");
	}

}
