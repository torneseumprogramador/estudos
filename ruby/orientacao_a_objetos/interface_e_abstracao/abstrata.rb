class Abstrata
  def initialize
    raise "classe não pode ser instânciada, somente herdada, classe abstrata"
  end

  def test1
    raise "não implementado"
  end

  def test2
    "este é um teste 2"
  end
end