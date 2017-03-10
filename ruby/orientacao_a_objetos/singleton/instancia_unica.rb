require 'singleton'

class InstanciaUnica
  include Singleton

  def test1
  	"este é um teste 1"
  end

  def test2
  	"este é um teste 2"
  end
end