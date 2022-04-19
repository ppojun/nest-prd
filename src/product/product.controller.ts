import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  public async createProduct(
    @Body() createProductDto: CreateProductDTO,
  ): Promise<Product> {
    const product = await this.productService.createProduct(createProductDto);
    return product;
  }

  @Get('all')
  public async getProducts(): Promise<Product[]> {
    const products = await this.productService.getProducts();
    return products;
  }

  @Get(':productId')
  public async getProduct(@Param('productId') productId: number) {
    const product = await this.productService.getProduct(productId);
    return product;
  }

  @Patch('/edit/:productId')
  public async editProduct(
    @Param('productId') productId: number,
    @Body() createProductDto: CreateProductDTO,
  ): Promise<Product> {
    const product = await this.productService.editProduct(
      productId,
      createProductDto,
    );
    return product;
  }

  @Delete('/delete/:productId')
  public async deleteProduct(@Param('productId') productId: number) {
    const deleteProduct = await this.productService.deleteProduct(productId);
    return deleteProduct;
  }
}
