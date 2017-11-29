class RecipesController < ApplicationController
  http_basic_authenticate_with name: "jen", password: "secret", except: [:index, :show]

  def index
    @recipes = Recipe.all.order(:name)
  end

  def show
    @recipe = Recipe.find(params[:id])
    if @recipe.category == nil
      @recipe.category = "Food"
    end
  end

  def new
    @recipe = Recipe.new
  end

  def edit
    @recipe = Recipe.find(params[:id])
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to @recipe
    else
      render 'new'
    end
  end

  def update
    @recipe = Recipe.find(params[:id])
    if @recipe.update(recipe_params)
      redirect_to @recipe
    else
      render 'edit'
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy

    redirect_to recipes_path
  end

  private
    def recipe_params
      params.require(:recipe).permit(:name, :preptime, :category, :ingredients, :tools, :steps)
    end
end
